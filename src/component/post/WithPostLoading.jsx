import React from 'react';

function WithPostLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <>
        <div style={{
          widows: "100%", height: "300px", border: "solid 1px #5b47ab",
          borderRadius: "5px",
          margin: "10px",
          boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996",
          textAlign:"center"
        }}>Hold on, fetching data may take some time :)</div>
      </>
    );
  };
}
export default WithPostLoading;