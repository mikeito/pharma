import React from 'react';
import { Tabs as ShadTabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';
import AllTransactions from './all-transactions';

const Tabs = () => {
  return (
    <ShadTabs defaultValue='all' className='w-full '>
      <TabsList className='items-start border-b bg-transparent rounded-none gap-x-5 mb-6 '>
        <TabsTrigger value='all'>All Transactions</TabsTrigger>
        <TabsTrigger value='transfer'>Transfer</TabsTrigger>
        <TabsTrigger value='withdraw'>Withdraw</TabsTrigger>
        <TabsTrigger value='bill-payment'>Bill Payment</TabsTrigger>
      </TabsList>
      <TabsContent value='all'>
        <AllTransactions />
      </TabsContent>
    </ShadTabs>
  );
};

export default Tabs;
