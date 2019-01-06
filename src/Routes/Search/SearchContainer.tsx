import React from "react";
import { SearchPresenter } from "./SearchPresenter";
import { moviesApi } from "../../api";

interface IProps {
  match: { params: { term: string } };
}
interface IState {
  movieResults: any;
  error: string | null;
  term: string;
  loading: boolean;
}

export default class SearchContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      movieResults: null,
      error: null,
      term: "",
      loading: false
    };
  }

  async componentDidMount() {
    const { term } = this.props.match.params;
    this.setState({ term });
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(term);
      this.setState({ movieResults });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps: any) {
    if (this.props.match.params.term !== prevProps.match.params.term) {
      const { term } = this.props.match.params;
      this.setState({ term });
      this.setState({ loading: true });
      try {
        const {
          data: { results: movieResults }
        } = await moviesApi.search(term);
        this.setState({ movieResults });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  static async getDerivedStateFromProps(props: any, state: any) {
    console.log(props, state);
    if (props.match.params.term !== state.term) {
      const { term } = props.match.params;
      // const {
      //   data: { results: movieResults }

      // } = await moviesApi.search(term);

      return { term };
      try {
        const {
          data: { results: movieResults }
        } = await moviesApi.search(term);
        return { movieResults: movieResults, term };
      } catch (error) {
        return { error: error.message };
      } finally {
        return { loading: false };
      }
    }
    return null;
  }

  render() {
    const { movieResults, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        error={error}
        loading={loading}
      />
    );
  }
}
