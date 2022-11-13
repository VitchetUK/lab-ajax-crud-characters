class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseUrl });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister() {
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister() {
    return this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister() {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister() {
    return this.api.delete(`/characters/${characterId}`);
  }
}
