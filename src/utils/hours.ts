import { Language } from '../types';

export interface OpeningStatus {
  isOpen: boolean;
  statusText: string;
  nextChangeText: string;
  dayName: string;
  openTimeStr: string;
  closeTimeStr: string;
}

export function getTiranaTime(): Date {
  // Get current date/time converted to Europe/Tirane timezone
  const now = new Date();
  const tiranaString = now.toLocaleString('en-US', { timeZone: 'Europe/Tirane' });
  return new Date(tiranaString);
}

export function checkRealtimeOpeningStatus(lang: Language): OpeningStatus {
  const tiranaDate = getTiranaTime();
  const dayOfWeek = tiranaDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
  const currentHour = tiranaDate.getHours();
  const currentMinute = tiranaDate.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;

  // Schedule definition in total minutes from midnight:
  // Friday (5): 14:00 (840 mins) to 24:00 (1440 mins)
  // Others (0, 1, 2, 3, 4, 6): 10:00 (600 mins) to 24:00 (1440 mins)
  const openMinute = dayOfWeek === 5 ? 840 : 600;
  const closeMinute = 1440; // 24:00 / midnight

  const isOpen = currentTotalMinutes >= openMinute && currentTotalMinutes < closeMinute;

  const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNamesSq = ['E Dielë', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];

  const dayName = lang === 'sq' ? dayNamesSq[dayOfWeek] : dayNamesEn[dayOfWeek];
  const openTimeStr = dayOfWeek === 5 ? '14:00' : '10:00';
  const closeTimeStr = '00:00 (12 AM)';

  let statusText = '';
  let nextChangeText = '';

  if (isOpen) {
    statusText = lang === 'sq' ? 'HAPUR TANI' : 'OPEN NOW';
    const remainingMins = closeMinute - currentTotalMinutes;
    const hours = Math.floor(remainingMins / 60);
    const mins = remainingMins % 60;
    if (hours > 0) {
      nextChangeText = lang === 'sq' 
        ? `Mbyllët pas ${hours} pikë-orësh e ${mins} min (sot në 00:00)` 
        : `Closes in ${hours}h ${mins}m (today at 12 AM)`;
    } else {
      nextChangeText = lang === 'sq' 
        ? `Mbyllët së shpejti pas ${mins} minutash` 
        : `Closes soon in ${mins} mins`;
    }
  } else {
    statusText = lang === 'sq' ? 'MBYLLUR TANI' : 'CLOSED NOW';
    if (currentTotalMinutes < openMinute) {
      const waitMins = openMinute - currentTotalMinutes;
      const hours = Math.floor(waitMins / 60);
      const mins = waitMins % 60;
      nextChangeText = lang === 'sq' 
        ? `Hapet sot në orën ${openTimeStr} (pas ${hours}h ${mins}m)` 
        : `Opens today at ${openTimeStr} (in ${hours}h ${mins}m)`;
    } else {
      // Next day opening time
      const tomorrowDay = (dayOfWeek + 1) % 7;
      const nextOpenStr = tomorrowDay === 5 ? '14:00' : '10:00';
      nextChangeText = lang === 'sq' 
        ? `Hapet nesër në orën ${nextOpenStr}` 
        : `Opens tomorrow at ${nextOpenStr}`;
    }
  }

  return {
    isOpen,
    statusText,
    nextChangeText,
    dayName,
    openTimeStr,
    closeTimeStr,
  };
}
