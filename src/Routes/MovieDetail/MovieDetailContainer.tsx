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
  cast: any;
  directors: any;
  producers: any;
  writers: any;
  editors: any;
  cinematographies: any;
  productionDesigns: any;
  composers: any;
  costumes: any;
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
      cast: null,
      directors: null,
      producers: null,
      writers: null,
      editors: null,
      cinematographies: null,
      productionDesigns: null,
      composers: null,
      costumes: null,
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
        const { cast } = credit;
        const { crew } = credit;
        const directors = crew.filter(
          (people: any) => people.department === "Directing"
        );
        const producers = crew.filter(
          (people: any) => people.department === "Production"
        );
        const writers = crew.filter(
          (people: any) => people.department === "Writing"
        );
        const editors = crew.filter(
          (people: any) => people.department === "Editing"
        );
        const cinematographies = crew.filter(
          (people: any) => people.department === "Camera"
        );
        const productionDesigns = crew.filter(
          (people: any) => people.department === "Art"
        );
        const composers = crew.filter(
          (people: any) => people.department === "Sound"
        );
        const costumes = crew.filter(
          (people: any) => people.department === "Costume & Make-Up"
        );
        this.setState({
          result,
          cast,
          directors,
          producers,
          writers,
          editors,
          cinematographies,
          productionDesigns,
          composers,
          costumes,
          loading: true
        });
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
      cast,
      directors,
      producers,
      writers,
      editors,
      cinematographies,
      productionDesigns,
      composers,
      costumes,
      creditIndex,
      error,
      loading
    } = this.state;
    console.log(this.state.result);
    return (
      <MovieDetailPresenter
        result={result}
        cast={cast}
        directors={directors}
        producers={producers}
        writers={writers}
        editors={editors}
        cinematographies={cinematographies}
        productionDesigns={productionDesigns}
        composers={composers}
        costumes={costumes}
        creditIndex={creditIndex}
        error={error}
        loading={loading}
        handleCreditIndexChange={this.handleCreditIndexChange}
      />
    );
  }
}
