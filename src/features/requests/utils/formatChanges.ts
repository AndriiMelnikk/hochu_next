import { ItemCondition, REQUEST_URGENCY_LABELS } from '@/entities/request';

export interface FormattedChange {
  label: string;
  oldValue?: unknown;
  newValue?: unknown;
  formatted?: string;
}

export const formatChange = (
  field: string,
  oldValue: unknown,
  newValue: unknown,
  t: (id: string, values?: Record<string, string | number>) => string,
): FormattedChange => {
  switch (field) {
    case 'category':
      return {
        label: t('request.create.categoryLabel'),
        formatted: t('request.detail.changes.categoryChanged'),
      };
    case 'images':
      return {
        label: t('request.create.filesLabel'),
        formatted: t('request.detail.changes.photosUpdated'),
      };
    case 'urgency': {
      const urgencyOldKey =
        REQUEST_URGENCY_LABELS[Number(oldValue) as keyof typeof REQUEST_URGENCY_LABELS];
      const urgencyNewKey =
        REQUEST_URGENCY_LABELS[Number(newValue) as keyof typeof REQUEST_URGENCY_LABELS];
      return {
        label: t('request.create.urgencyLabel'),
        oldValue: urgencyOldKey ? t(urgencyOldKey) : oldValue,
        newValue: urgencyNewKey ? t(urgencyNewKey) : newValue,
      };
    }
    case 'itemCondition': {
      const getConditionLabel = (val: unknown) => {
        if (val === ItemCondition.NEW) return t('request.create.itemConditionNew');
        if (val === ItemCondition.USED) return t('request.create.itemConditionUsed');
        return val;
      };
      return {
        label: t('request.create.itemConditionLabel'),
        oldValue: getConditionLabel(oldValue),
        newValue: getConditionLabel(newValue),
      };
    }
    default: {
      let label = field;
      if (field === 'title') label = t('request.create.titleLabel');
      else if (field === 'description') label = t('request.create.descriptionLabel');
      else if (field === 'budgetMin') label = t('request.create.budgetMinLabel');
      else if (field === 'budgetMax') label = t('request.create.budgetMaxLabel');
      else if (field === 'location') label = t('request.create.locationLabel');

      return {
        label,
        oldValue,
        newValue,
      };
    }
  }
};
