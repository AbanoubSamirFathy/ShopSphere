export function matchesSearch(product, searchTerm) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return true;
  }

  const title = product.title.toLowerCase();
  const category = product.category.toLowerCase();

  return (
    title.includes(normalizedSearch) || category.includes(normalizedSearch)
  );
}
