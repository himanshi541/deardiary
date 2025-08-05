// import React, { useEffect, useState } from "react";

// import NewsItem from "./NewsItem";
// import Spinner from "./spinner";
// import PropTypes from "prop-types";
// import fallbackNews from "./fallbackNews.json";
// import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from "react-top-loading-bar";
// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState([true]);
//   const [page, setPage] = useState([1]);
//   const [totalResults, setTotalresults] = useState([0]);

//   //   document.title = `${.capitalizeFirstLetter(
//   //     props.category
//   //   )} - NewsExpress`;
//   // }
//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   const updateNews = async () => {
//     props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(60);
//     props.setProgress(80);
//     console.log(parsedData);
//     setArticles(parsedData.articles);
//     setTotalresults(parsedData.totalResults);
//     setLoading(false);
//     props.setProgress(100);
//   };
//   useEffect(() => {
//     updateNews();
//   }, []);
//   // async componentDidUpdate(prevProps) {
//   //   if (
//   //     prevProps.category !== props.category ||
//   //     prevProps.searchQuery !== props.searchQuery
//   //   )
//   // };

//   // async componentDidMount() {
//   //   updateNews();
//   // }

//   // const fetchMoreData = async () => {
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${
//   //     props.country
//   //   }&category=${props.category}&apiKey=${props.apiKey}&page=${
//   //     page + 1
//   //   }&pageSize=${props.pageSize}`;
//   //   setPage(page + 1);
//   //   // setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();
//   //   setArticles(articles.concat(parsedData.articles));
//   //   setTotalresults(parsedData.totalResults);
//   //   setLoading(false);
//   // }
//   const fetchNews = async () => {
//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
//       );
//       const data = await response.json();

//       if (data.status !== "ok" || !data.articles.length) {
//         throw new Error("API limit reached or no articles found");
//       }

//       setArticles(data.articles);
//     } catch (error) {
//       console.warn("Error fetching from NewsAPI. Using fallback data.", error);
//       setArticles(fallbackNews);
//       setError("API limit reached — showing fallback data.");
//     }
//   };

//   return (
//     <div className="container my-3">
//       <h1 className="text-center" style={{ margin: "35px 0px" }}>
//         NewsExpress - To Get the Latest news on{" "}
//         {capitalizeFirstLetter(props.category)}
//       </h1>
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container my-3">
//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4 my-3 " key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageurl={element.urlToImage}
//                     newsurl={element.url}
//                     author={element.author ? element.author : "Unknown"}
//                     publishdate={
//                       element.publishedAt
//                         ? new Date(element.publishedAt).toGMTString()
//                         : "Unknown"
//                     }
//                     source={element.source.name}
//                     category={props.category}
//                     country={props.country}
//                     pageSize={props.pageSize}
//                     page={page}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default News;
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import fallbackNews from "./fallbackNews.json";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);
  const [error, setError] = useState(""); // ✅ added error state

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);

    try {
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(60);

      if (parsedData.status !== "ok" || !parsedData.articles.length) {
        throw new Error("API limit reached or invalid response");
      }

      setArticles(parsedData.articles);
      setTotalresults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.warn("NewsAPI fetch failed, using fallback data.", error);
      setArticles(fallbackNews);
      setTotalresults(fallbackNews.length);
      setError("NewsAPI limit reached – showing demo data.");
      setLoading(false);
    }

    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status !== "ok" || !parsedData.articles.length) {
        throw new Error("API limit reached or no more articles.");
      }

      setArticles(articles.concat(parsedData.articles));
      setTotalresults(parsedData.totalResults);
      setPage(nextPage);
    } catch (error) {
      console.warn("Error in infinite scroll fetch.", error);
      setError("API limit hit — unable to load more.");
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        NewsExpress - Latest News on {capitalizeFirstLetter(props.category)}
      </h1>

      {error && <div className="alert alert-warning text-center">{error}</div>}

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author || "Unknown"}
                  publishdate={
                    element.publishedAt
                      ? new Date(element.publishedAt).toGMTString()
                      : "Unknown"
                  }
                  source={element.source ? element.source.name : "Unknown"}
                  category={props.category}
                  country={props.country}
                  pageSize={props.pageSize}
                  page={page}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
