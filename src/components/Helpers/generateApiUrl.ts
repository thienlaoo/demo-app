export function generateApiUrl(currentPage: number) {
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = startIndex + itemsPerPage - 1;

    const idRange = Array.from({ length: itemsPerPage }, (_, index) => startIndex + index);

    const apiUrl = `https://rickandmortyapi.com/api/character/${idRange.join()}`;

    return apiUrl;
}