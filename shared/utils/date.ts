export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })
