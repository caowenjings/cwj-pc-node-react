// 自定义骨架图
import ContentLoader from 'react-content-loader';

/** 
speed: 占位符填充速度。
width: 占位符宽度。
height: 占位符高度。
viewBox: SVG 视图框大小。
backgroundColor: 占位符背景颜色。
foregroundColor: 占位符前景颜色。
*/

/** svg 图形 fill：填充色  stroke-width：矩形边界的宽度 stroke：矩形边界的颜色
方形 <rect>
圆形 <circle>
椭圆 <ellipse>
线条 <line>
折线 <polyline>
多边形 <polygon>
路径 <path>
*/

const Skeleton = (option: any) => {
  return (
    <ContentLoader backgroundColor="#dadada" style={{ width: '100%', height: '105px' }} {...option}>
      <rect width="50%" height="30" y="0" />
    </ContentLoader>
  );
};

export const createSkeleton = (num = 1, option = {}) => {
  return Array.from({ length: num }, (v, i) => {
    return <Skeleton option={option} key={i} />;
  });
};

export default createSkeleton;
