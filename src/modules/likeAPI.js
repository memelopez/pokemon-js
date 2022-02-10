export default class likesContent {
  static url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lyq9jUNEHrKhgXNSU82r/likes';

  static setLikes = async (id) => {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    const data = await response.text();
    return data;
  };

  static getLikes = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  };
}