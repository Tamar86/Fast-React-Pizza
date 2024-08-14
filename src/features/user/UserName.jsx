//The UserName component is a simple React component that uses the useSelector hook
// from react - redux to access the userName from the Redux store.

import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;
  return (
    <div className='hidden text-sm font-semibold md:block'>{userName}</div>
  );
}

export default UserName;
