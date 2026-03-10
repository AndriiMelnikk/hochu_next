import type { Messages } from '@lingui/core';

export const messages: Messages = {
  // Proposal detail page
  'proposal.detail.errorTitle': 'Loading error',
  'proposal.detail.errorDescription':
    'Failed to load proposal data. Please try reloading the page later.',
  'proposal.detail.errorRetry': 'Reload page',
  'proposal.detail.breadcrumb': 'Proposal #{id}',
  'proposal.detail.createdAt': 'Created on {date}',
  'proposal.detail.price': '{price} UAH',
  'proposal.detail.itemCondition.new': 'New',
  'proposal.detail.itemCondition.used': 'Used',

  'proposal.detail.images.title': 'Photos',
  'proposal.detail.images.alt': 'Photo {index}',

  'proposal.detail.description.title': 'Detailed description',

  'proposal.detail.originalRequest.title': 'Original request',
  'proposal.detail.originalRequest.budget': 'Budget: {min}-{max} UAH',
  'proposal.detail.originalRequest.views': '{count} views',
  'proposal.detail.originalRequest.proposals': '{count} proposals',

  'proposal.detail.buyer.title': 'Buyer (Customer)',
  'proposal.detail.buyer.locationUnknown': 'Location not specified',
  'proposal.detail.buyer.ratingLabel': 'Rating:',
  'proposal.detail.buyer.reviewsCount': '({count} reviews)',
  'proposal.detail.buyer.completedDeals': 'Completed deals:',
  'proposal.detail.buyer.memberSince': 'On the platform since {date} year',

  'proposal.detail.reviews.title': 'Reviews about the seller',

  'proposal.detail.seller.title': 'Seller',
  'proposal.detail.seller.locationUnknown': 'Location not specified',
  'proposal.detail.seller.rating': 'Rating',
  'proposal.detail.seller.completedDeals': 'Completed deals',
  'proposal.detail.seller.memberSince': 'On the platform since {date} year',

  'proposal.detail.actions.accept': 'Accept proposal',
  'proposal.detail.actions.message': 'Send message',
  'proposal.detail.actions.reject': 'Reject',

  'proposal.detail.tip.title': 'Tip:',
  'proposal.detail.tip.text':
    'Be sure to discuss all details in chat before making a decision. Check the seller’s rating and reviews.',

  'proposal.detail.stats.title': 'Proposal statistics',
  'proposal.detail.stats.views': 'Views',
  'proposal.detail.stats.sellerReviews': 'Reviews about the seller',
};
