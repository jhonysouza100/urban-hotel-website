function facebookComments() {
  return (
    <div id="fb-root">
         <div className="fb-comments" data-href={`${import.meta.env.VITE_FACEBOOK_DATA_HREF}`} data-width="100%" data-numposts="5"></div>
    </div>
  );
}

export default facebookComments;