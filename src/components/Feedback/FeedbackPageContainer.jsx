import React from 'react';
import {connect} from "react-redux";
import FeedbackPage from "./FeedbackPage";
import {getFeedbacks} from "../../redux/feedback_reducer";

class FeedbackPageContainer extends React.PureComponent{
    componentDidMount() {
        this.props.getFeedbacks();
    }

    render() {
        return <FeedbackPage feedbacks={this.props.feedbacks}
                             isFeedbacksDownloaded={this.props.isFeedbacksDownloaded}/>
    };
}

let mapStateToProps = (state) => ({
    feedbacks: state.feedback.feedbacks,
    isFeedbacksDownloaded: state.feedback.isFeedbacksDownloaded,
});

export default connect(mapStateToProps, {
    getFeedbacks,
})(FeedbackPageContainer);