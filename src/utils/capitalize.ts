// 텍스트를 파스칼 케이스로 변환하는 함수
export function toPascalCase(text: string): string {
    return text.replace(/(^\w|_\w)/g, match => match.replace('_', '').toUpperCase());
}

// 텍스트를 스네이크 케이스로 변환하는 함수
export function toSnakeCase(text: string): string {
    return text.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '').toLowerCase();
}
