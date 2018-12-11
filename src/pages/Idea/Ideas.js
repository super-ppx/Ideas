import React from 'react';
import { Link } from 'react-router-dom';
import { List, SearchBar, Badge } from 'antd-mobile';
import './Ideas.css';

const Item = List.Item;
const Brief = Item.Brief;

const data = [
  {
    id: 1,
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    id: 2,
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: "McDonald's invites you",
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    id: 3,
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    id: 4,
    title: '斗鱼紧急裁员 一周前工作群里还在传捷报'
  }
];

class IdeasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    return (
      <div className="ideas-page">
        <SearchBar
          placeholder="Search"
          maxLength={8}
          cancelText="Cancel"
          onChange={search => this.setState({ search })}
        />
        <List>
          {data
            .filter(v => {
              return v.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase());
            })
            .map((v, i) => {
              return (
                <Item key={i} wrap multipleLine>
                  <Link to={`/m/idea/detail/${v.id}`} key={v.id}>
                    <strong style={{ color: '#0366d6' }}>
                      {v.title}
                      {i === 2 && (
                        <Badge
                          text="HOT"
                          hot={true}
                          style={{ marginLeft: 12, marginTop: -5 }}
                        />
                      )}
                    </strong>{' '}
                    <Brief>Opened by LiChao 1 day ago</Brief>
                  </Link>
                </Item>
              );
            })}
        </List>
      </div>
    );
  }
}

export default IdeasPage;
