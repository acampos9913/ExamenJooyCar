export class FetchAdapter {
  async Request<TResponse>(
    url: string, 
    config: RequestInit
  ): Promise<TResponse> {
    try {
      const response = await fetch(url, config);
      return await response.json();
    }
    catch (error) {
      throw new Error;
    }
  }
}
