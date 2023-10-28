import { Result, Switch } from 'antd'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gab-10'>
      <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
      <Switch checked />
    </div>
  )
}
