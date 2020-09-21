import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MESSAGES = gql`
  query {
    messages {
      _id
      title
      content
      author
    }
  }
`;


function MessageList() {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data.messages.map((message) => {
          return (
            <div key={message._id} className="card m-2">
              <div className="card-body">
                <h4>{message.title}</h4>
                <p>{message.content}</p>
                <p>{message.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageList;
