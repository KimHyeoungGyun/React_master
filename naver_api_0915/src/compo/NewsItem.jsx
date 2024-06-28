import { useContext } from "react";
import { NaverData } from "../App";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

function NewsItem() {
  const data = useContext(NaverData);
  console.log(data);
  return (
    <div style={{display : 'flex', flexWrap:'wrap'}}>
      {data.searchData.map((item, index) => {
        return (
          // <Card>
          //   <Card.Header>제목 : {item.title}</Card.Header>
          //   <Card.Body>
          //     <blockquote className="blockquote mb-0">
          //       <p>내용 : {item.description}</p>
          //       <footer className="blockquote-footer">시간: {item.pubDate}</footer>
          //     </blockquote>
          //   </Card.Body>
          // </Card>
          <div key={index} className="col-md-3"  >
            <Card style={{ width: '20rem' }}  >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description.length > 20 ? item.description.slice(0, 20) + '...' : item.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>가격 : {item.discount}원</ListGroup.Item>
                <ListGroup.Item>출판사 : {item.publisher}</ListGroup.Item>
                <ListGroup.Item>작가 : {item.author}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href={item.link}>구매</Card.Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default NewsItem;
