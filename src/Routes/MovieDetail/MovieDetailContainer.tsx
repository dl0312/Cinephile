import React from "react";
import { MovieDetailPresenter } from "./MovieDetailPresenter";
import { moviesApi } from "../../api";

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
  history: {
    push: any;
  };
}

interface IState {
  result: any;
  credit: any;
  directors: any;
  creditIndex: number;
  error: string | null;
  loading: boolean;
}

export default class MovieDetailContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      result: null,
      credit: null,
      directors: null,
      creditIndex: 0,
      error: null,
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const {
        match: {
          params: { id }
        },
        history: { push }
      } = this.props;
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      try {
        const { data: result } = await moviesApi.detail(parsedId);
        const { data: credit } = await moviesApi.credit(parsedId);
        const directors = credit.crew.filter(
          (credit: any) => credit.job === "Director"
        );
        this.setState({ result, credit, directors, loading: true });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
      this.setState({ loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleCreditIndexChange = (creditIndex: number) => {
    this.setState({ creditIndex });
  };

  render() {
    const {
      result,
      credit,
      directors,
      creditIndex,
      error,
      loading
    } = this.state;
    console.log(
      this.state.result,
      this.state.credit && this.state.credit.cast,
      this.state.credit && this.state.credit.crew
    );

    return (
      <MovieDetailPresenter
        result={result}
        credit={credit}
        directors={directors}
        creditIndex={creditIndex}
        error={error}
        loading={loading}
        handleCreditIndexChange={this.handleCreditIndexChange}
      />
    );
  }
}
