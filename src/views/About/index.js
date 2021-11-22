import React, { Component } from 'react';
import { apiGetAboutInfo, apiGetAboutInfoBackup } from 'api/about.api';
import Introduction from 'components/Introduction';
import Features from 'components/Features';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      features: [],
    }
  }

  componentDidMount() {
    this.fetchAboutInfo();
  }

  fetchAboutInfo = async () => {
    await apiGetAboutInfo()
      .then((res) => {
        const { data } = res;
        this.setState({ title: data.title, description: data.opening_crawl }, () => {
          this.generateFeatures();
        });
      })
      .catch(() => {
        this.fetchAboutInfoBackup();
      })
  }

  fetchAboutInfoBackup = async () => {
    await apiGetAboutInfoBackup()
      .then((res) => {
        const { data: { result: { properties } } }  = res;
        this.setState({ title: properties.title, description: properties.opening_crawl }, () => {
          this.generateFeatures();
        });
      })
      .catch(() => {
        this.setState({ title: undefined, description: undefined });
      })
  }

  generateFeatures() {
    const { title, description } = this.state;
    const features = [];
    for (let i = 0; i < 4; i++) {
      features.push({ title, description });
    }
    this.setState({ features });
  }

  render() {
    const { title, description, features } = this.state;

    return (
      <div className="about page">
        <Introduction title={title} description={description} />
        {features.length > 0 && <Features title={title} features={features} />}
      </div>
    )
  }
}

export default About;
