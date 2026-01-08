type User = {
  name: string;
  age: number;
};

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      {user.name} - {user.age} años
    </div>
    );
};
export default UserCard;
