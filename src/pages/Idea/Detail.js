import React from 'react';
import {
  WingBlank,
  WhiteSpace,
  ImagePicker,
  Button,
  TextareaItem
} from 'antd-mobile';
import './Detail.css';
import avatar from '../../asserts/icons/avatar.jpg';

const idea = {
  title: 'Tokyo prosecutors file charges against Nissan and Ghosn',
  detail: `Renault's board of directors says that Carlos Ghosn will remain as chairman and CEO of the carmaker even though he is detained in Japan for alleged misuse of Nissan assets.
    The board on Tuesday, however, tapped the carmaker's No. 2, Thierry Bollore, to fill in for Ghosn while he's "temporarily incapacitated."
    A statement issued after a three-hour board meeting said that the board was "unable to comment on the evidence seemingly gathered" against Ghosn, who was arrested Monday. It said Bollore, Renault's chief operating officer, will lead "on a temporary basis."`
};
const files = [
  {
    url:
      'https://www.breakingnews.ie/remote/media.central.ie/media/images/n/NissanChairmanCarlosGhosnAP20April2018_large.jpg?width=600&s=bn-886602'
  },
  {
    url:
      'https://www.breakingnews.ie/remote/media.central.ie/media/images/r/RenaultNissanCarlosGhosn12Feb2016_large.jpg?width=600&s=bn-886602'
  },
  {
    url:
      'https://www.breakingnews.ie/remote/media.central.ie/media/images/h/HirotoSaikawaNissanLeaf_large.jpg?width=600&s=bn-886602'
  },
  {
    url: 'http://media.graytvinc.com/images/810*455/1280x720_81119P00-AJOWI.jpg'
  }
];

class LoginPage extends React.Component {
  state = {
    loading: false,
    vote: 3
  };
  render() {
    return (
      <div className="idea-detail-page">
        <WingBlank size="lg">
          <div>
            <h2>{idea.title}</h2>
            <p className="idea-detail__author">
              <img className="idea-detail__author-avatar" src={avatar} alt="" />
              <strong>Li Chao</strong> created this idea about 9 hours ago •
              edited about 8 hours ago
            </p>
            <p className="idea-detail__content">{idea.detail}</p>
            <ImagePicker
              files={files}
              onChange={this.onFileChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={false}
            />
            <WhiteSpace />
            <span
              role="img"
              aria-label="vote"
              onClick={() => {
                this.setState({ vote: this.state.vote + 1 });
              }}
              style={{
                fontSize: 12,
                border: '1px solid #d9d9d9',
                borderRadius: '3px',
                padding: '4px 8px',
                color: '#0366d6'
              }}
            >
              👍 {this.state.vote}
            </span>
            <WhiteSpace size="lg" />
            <TextareaItem
              placeholder="Leave a comment"
              autoHeight
              count={500}
              className="idea-form__input"
            />
            <WhiteSpace size="lg" />
            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.comment}
            >
              Comment
            </Button>
          </div>
        </WingBlank>
      </div>
    );
  }
}

export default LoginPage;
