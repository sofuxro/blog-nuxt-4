export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' }) // "Sep 1, 2023"

export const formatDateWithDots = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', { dateStyle: 'short' }) // "9/1/23"
    .replace(/\//g, '.') // "9.1.23"
