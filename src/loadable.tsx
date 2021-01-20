/*
 * @Author: wangfeng
 * @Date: 2021-01-14 15:36:55
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 19:02:54
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/loadable.tsx
 */
import React from 'react'
import Loadable from 'react-loadable';
import { ActivityIndicator, Result, Icon } from 'antd-mobile';

// 通用的过场组件
const MyLoadingComponent = ({ isLoading = false, error = false }) => {
    if (isLoading) {
        // 处理加载状态
        return <ActivityIndicator toast text="正在加载..." />;
    }
    if (error) {
        // 处理错误状态
        return (
            <Result
                img={<Icon type="cross-circle" className="loadable-error" size="lg" style={{ fill: '#F13642', width: '60px', height: '60px' }} />}
                title="页面打开失败~"
                message="问题我们已经知道，正在抓紧抢修~"
            />
        )
    }
    return null
};

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
const loadable = (loader: any, loading = MyLoadingComponent) => Loadable({
    loader,
    loading,
})

export default loadable
