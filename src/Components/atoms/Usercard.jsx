import styles from '../../styles/Usercard.module.css'
export default function Usercard({userName, userAge, userDescription}){
    return(
        <div className={styles.userCard}>
           <div className={styles.userInfo}>
               <p>Name</p>
               <p>{userName}</p>
            </div>

            <div className={styles.userinfo}>
               <p>Age</p>
               <p>{userAge}</p>
            </div>

            <div className={styles.userInfo}>
               <p>Description</p>
               <p>{userDescription}</p>
            </div>
        </div> 
    )
}