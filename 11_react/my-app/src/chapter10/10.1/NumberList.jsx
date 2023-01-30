function NumberList(props) {
  const { numbers } = props;

  const listItem = numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
  });
  // map() 함수 결과
  // [
  //   <li>1</li>,
  //   <li>2</li>,
  //   <li>3</li>,
  //   <li>4</li>,
  //   <li>5</li>
  // ]

  return (  
    <ul>{listItem}</ul>
  );
}

export default NumberList;