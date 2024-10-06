"use client";
import { Button, Input } from 'antd';
import { FcSearch } from "react-icons/fc";

const { Search } = Input;

const BlogSearch = () => {
    const onSearch = (value: string) => {
        console.log('Search:', value); // Replace this with your actual search handler
    };

    return (
        <div className="w-full flex">
            <Input
                placeholder="Search blogs..."
                className="w-full bg-transparent border-0 hover:bg-transparent active:bg-transparent"
                size='large'

            />
            <Button size='large' icon={<FcSearch size={24} />} type='link' />
        </div>
    );
};

export default BlogSearch;
