export class HttpClientFactory {
  errorHandler: null|(<T>(reason: any) => Promise<T>) = null;

  constructor(private apiOrigin = '') {}

  async get<T>(path: string, override?: Partial<RequestInit>): Promise<T|Array<T>> {
    return fetch(this.apiOrigin + path, {
      method: 'GET',
      ...override
    })
      .then(r => this.handleResponse<T>(r))
      .catch(error => this.catchError(error));
  }

  post<T>(path: string, data: T, override?: Partial<RequestInit>): PromiseLike<T|undefined> {
    return fetch(this.apiOrigin + path, {
      method: 'POST',
      body: JSON.stringify(data),
      ...override
    })
      .then(r => this.handleResponse(r))
      .catch(error => this.catchError(error));
  }

  put<T>(path: string, data: T, override?: Partial<RequestInit>): Promise<T|undefined> {
    return fetch(this.apiOrigin + path, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...override
    })
      .then(r => this.handleResponse(r))
      .catch(error => this.catchError(error));
  }

  delete<T>(path: string, override?: Partial<RequestInit>): Promise<T|undefined> {
    return fetch(this.apiOrigin + path, {
      method: 'DELETE',
      ...override
    })
      .then(r => this.handleResponse(r))
      .catch(error => this.catchError(error));
  }

  private handleResponse<T>(response: Response) {
    if (response.status < 400) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }

  private catchError<T>(error: any): Promise<T> {
    return this.errorHandler ? this.errorHandler(error) : Promise.reject(error);
  }
}
