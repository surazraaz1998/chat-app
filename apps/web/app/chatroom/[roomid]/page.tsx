interface ChatroomPageProps {
    params: {
      roomid: string;
    };
}
export default async function ChatroomPage({params}: ChatroomPageProps) {
    return <div>hello everyone {params.roomid}</div>;
  }