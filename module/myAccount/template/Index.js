'use client';
import { Tabs, Tab, Button, Divider } from '@nextui-org/react';
const Index = () => {
    return (
        <div className="w-[25%] flex flex-col">
            <Button radius="none" className="bg-[#FFFFFFF] text-[black]">
                Dashboard
            </Button>
            <Divider />
            <Button radius="none">Orders</Button>
            <Divider />
            <Button radius="none">Downloads</Button>
            <Divider />
            <Button radius="none">Addresses</Button>
            <Divider />
            <Button radius="none">Account details</Button>
            <Divider />
            <Button radius="none">Whishlist</Button>
            <Divider />
            <Button radius="none">My Event</Button>
            <Divider />
            <Button radius="none">Logout</Button>
        </div>
    );
};
export default Index;
