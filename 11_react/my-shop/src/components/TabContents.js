import React from 'react';

function TabContents(props) {
  const { showTabIndex } = props;

  let tabContents;
  if ( showTabIndex === 0 ) {
    tabContents = <div>탭 내용1</div>;
  } else if (showTabIndex === 1 ) {
    tabContents = <div>탭 내용2</div>;
  } else if (showTabIndex === 2 ) {
    tabContents = <div>탭 내용3</div>;
  } else if (showTabIndex === 3 ) {
    tabContents = <div>탭 내용4</div>;
  }
  return (
    <div>
      {tabContents}
    </div>
  );
}

export default TabContents;