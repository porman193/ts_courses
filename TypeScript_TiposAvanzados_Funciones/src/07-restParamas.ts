import { User ,ROLES} from "./01-enums"

let currentUser: User = {
  username: 'john_doe',
  role: ROLES.ADMIN,
}


export const checkRole = (user:User,...roles :ROLES[]) =>{
  if(roles.includes(user.role)) {
    return true;
  }
  return false;
};

console.log(checkRole(currentUser, ROLES.ADMIN,ROLES.CUSTOMER,ROLES.GUEST));
console.log(checkRole(currentUser, ROLES.CUSTOMER, ROLES.GUEST));
console.log(checkRole(currentUser, ROLES.GUEST));
 // true