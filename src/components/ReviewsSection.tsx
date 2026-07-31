import React, { useState } from 'react';
import { Star, MessageSquarePlus, ThumbsUp, CheckCircle2, User, X } from 'lucide-react';
import { Language, Review } from '../types';
import { translations } from '../translations';
import { initialReviews } from '../data/reviewsData';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review state
  const [authorName, setAuthorName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const tagsList = ['all', 'sandwiches', 'pizzas', 'staff', 'food', 'service'];

  const filteredReviews = reviews.filter((rev) => {
    if (selectedTag === 'all') return true;
    return rev.tags?.includes(selectedTag);
  });

  const handleLike = (id: string) => {
    setReviews(
      reviews.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      author: authorName,
      rating: newRating,
      date: lang === 'sq' ? 'Sot' : 'Just now',
      comment: newComment,
      tags: ['food'],
      likes: 1,
    };

    setReviews([newRev, ...reviews]);
    setAuthorName('');
    setNewComment('');
    setIsModalOpen(false);
  };

  return (
    <section id="reviews-section" className="py-12 sm:py-16 bg-[#fdfaf6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 font-black text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-orange-200">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>Google Rating 4.7 / 5.0</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif tracking-tight uppercase">
              {t.reviewsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {t.reviewsSubtitle}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-2xs transition-all cursor-pointer active:scale-95 shrink-0 uppercase tracking-wider"
          >
            <MessageSquarePlus className="w-4 h-4 text-orange-400" />
            <span>{t.writeReview}</span>
          </button>
        </div>

        {/* Rating Overview Card */}
        <div className="bg-white rounded-2xl p-6 shadow-2xs border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-4 text-center md:border-r border-slate-200 md:pr-6">
            <div className="text-5xl font-black text-slate-900 font-serif">4.7</div>
            <div className="flex items-center justify-center gap-1 my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">30+ Google Reviews</p>
          </div>

          <div className="md:col-span-8 space-y-1.5">
            {[
              { stars: 5, pct: 85 },
              { stars: 4, pct: 10 },
              { stars: 3, pct: 3 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 1 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                <span className="w-8">{row.stars} ★</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-8 font-mono text-slate-400 text-[11px]">{row.pct}%</span>
              </div>
            ))}
          </div>

        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {tagsList.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tag === 'all' ? t.catAll : tag}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-800 font-bold flex items-center justify-center text-sm">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {rev.date}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.verifiedCustomer}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {rev.tags?.map((tg) => (
                    <span key={tg} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                      #{tg}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleLike(rev.id)}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-orange-600 text-xs font-bold cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{rev.likes}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-slate-900 font-serif">
                {t.writeReview}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                  placeholder="e.g. Besnik K."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {t.yourRating}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewRating(s)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          s <= newRating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {t.yourComment}
                </label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={3}
                  required
                  placeholder="Delicious halal pizza..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider"
              >
                {t.submitReview}
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};
