import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import CardView from '../../Components/CardView';
import { getMovies } from '../../Services/APIs/Movies/Movies';
import Colors from '../../Utils/Common/Colors';
import CircularProgress from '@mui/material/CircularProgress';
import { Else, If, Then } from 'react-if';
import './HomeStyles.css';
import { useQuery } from 'react-query';
import { IMovie } from '../../Interfaces/IMovies';

const Home = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { data, isLoading, refetch } = useQuery<IMovie[]>(
    ['get-movies'],
    async () => {
      const { data } = await getMovies(searchText);
      return data;
    }
  );

  const onChangeSearch = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={15}>
        <Grid item lg={12}>
          <Grid container spacing={2} className="header">
            <Grid item lg={6}>
              <Typography variant="h1" color={Colors.PrimaryLight}>
                Movies Catalog
              </Typography>
            </Grid>
            <Grid item lg={6} className="buttonsDiv">
              <TextField
                id="filled-basic"
                label="Pesquisar"
                size="small"
                onChange={onChangeSearch}
              />{' '}
              &nbsp;
              <Button variant="contained" onClick={() => refetch()}>
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} className="divCards">
          <If condition={isLoading}>
            <Then>
              <Box className="progress">
                <CircularProgress />
              </Box>
            </Then>
            <Else>
              <Grid container spacing={2}>
                {data?.map((movie) => (
                  <Grid item xs={4} key={movie.id}>
                    <CardView movie={movie} />
                  </Grid>
                ))}
              </Grid>
            </Else>
          </If>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
