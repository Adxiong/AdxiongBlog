import { useEffect } from 'react';
import Request from '../../../request/api';
import http, { RequestParams } from '../../../request/http';
import { LinkCategoryType } from '../../../request/instant';

const Category = () => {
  useEffect(() => {
    http
      .request<LinkCategoryType>({
        url: Request.Link.getCategoryList,
        method: Request.RequestGet,
        params: {
          time: new Date().getTime(),
        },
      } as RequestParams)
      .then((res) => {
        console.log(res);
        // setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>1212</div>;
};

export default Category;
