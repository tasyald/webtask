import React, { Component } from 'react';
import { apiGetSubtitle, apiGetPhotos } from 'api/home.api';
import Hero from 'components/Hero';
import PhotoGrid from 'components/PhotoGrid';
import PageController from 'components/PageController';

const PAGE_SIZE = 16;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      photos: [],
      pages: 1,
      page: 1,
    }
  }

  componentDidMount() {
    this.fetchSubtitle();
    this.fetchPhotos();
  }

  fetchSubtitle = async () => {
    await apiGetSubtitle()
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({ subtitle: data.value });
      })
      .catch((e) => {
        console.log(e);
      })
  }

  fetchPhotos = async () => {
    await apiGetPhotos()
      .then((res) => {
        const { data } = res;
        console.log(Math.ceil(data / PAGE_SIZE));
        this.setState({
          photos: data,
          pages: Math.ceil(data.length / PAGE_SIZE),
        });
      })
      .catch(() => {
      })
  }

  paginate(array, pageSize, page) {
    return array.slice((page - 1) * pageSize, page * pageSize);
  }

  onChangePage = (currentPage) => {
    this.setState({
      page: currentPage,
    });
  }

  render() {
    const {
      subtitle, photos, pages, page,
    } = this.state;

    return (
      <div className="home">
        <Hero title="Photos" subtitle={subtitle} image="https://source.unsplash.com/random" />
        <PhotoGrid photos={this.paginate(photos, PAGE_SIZE, page)} />
        <PageController pages={pages} currentPage={page} onChange={this.onChangePage} />
      </div>
    )
  };
};

export default Home;
