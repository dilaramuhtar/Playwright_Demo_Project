export class APIRequestHelper {
  static formatAPIRequest(template: string, values: unknown[]): string {
    return template.replace(/\{(\d+)\}/g, (match, indexText) => {
      const index = parseInt(indexText, 10);

      return index < values.length ? String(values[index]) : match;
    });
  }
}
