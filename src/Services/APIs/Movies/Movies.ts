import api from '../Common/api';

export const mockApi = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), Math.random() * 1000);
  });
};

// export const getMovies = (search: string) =>
//   mockApi({
//     data: [
//       {
//         id: '1',
//         title: 'Rio',
//         description: 'Rio',
//         category: 'Animation',
//         cover_uri:
//           'https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube_Logo_White.png',
//         video_uri: 'https://www.youtube.com/watch?v=IX0amioOJg8',
//         release_date: '2011-04-15',
//       },
//       {
//         id: '2',
//         title: 'Superman',
//         description: 'Superman',
//         category: 'Animation',
//         cover_uri:
//           'https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube_Logo_White.png',
//         video_uri: 'https://www.youtube.com/watch?v=IX0amioOJg8',
//         release_date: '1978-12-15',
//       },
//       {
//         id: '3',
//         title: 'Death Note',
//         description: 'Death Note',
//         category: 'Drama',
//         cover_uri:
//           'https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube_Logo_White.png',
//         video_uri: 'https://www.youtube.com/watch?v=IX0amioOJg8',
//         release_date: '2006-01-25',
//       },
//     ].filter((item) => item.title.toLowerCase().includes(search)),
//   });

export const getMovies = (search: string) =>
  api.get('/movies?searchTerm=' + search);
// const getPersonsPost = (data: any) => api.post("/persons/getPersons", data);
export const getMovieInfo = (prodID: string) => api.get('/movies/' + prodID);
