import React from "react";

interface ContainerProps {
  content: any;
}
export const Container: React.FC<ContainerProps> = ({ content }) => {
  console.log(content);
  
    return <div></div>;
};
