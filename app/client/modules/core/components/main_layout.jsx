import React from 'react';
import {connect} from 'react-redux';


class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visit_count: this.props.visit_count,
      real_ip: this.props.real_ip,
      currentUser: this.props.currentUser
    }
  }

  render() {
    return (
      <div>
        <section className="content">
          {this.props.children}
        </section>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainLayout);