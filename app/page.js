import styles from "@/app/ui/home.module.css";
import { pacifico } from "./ui/fonts";
import { Button } from "@mui/material";

export default function Home() {
  return (
   <main className="flex flex-col h-screen" style={{textAlign:'center'}}>
    <p className={`${pacifico.className} antialiased`} style={{fontSize:'75px'}}>TO DO LIST</p>
    <Button className={styles.button} variant="contained">Add To Do Task</Button>
    <Button className={styles.button} variant="contained">Completed Tasks</Button>

    <div className={styles.container}>
    <div className={styles.todoPosition}>
    <p className={`${pacifico.className} antialiased`} style={{fontSize:'40px'}}>New To Do's</p>

    </div>

    <div className={styles.todoPosition}>
    <p className={`${pacifico.className} antialiased`} style={{fontSize:'40px'}}>Doing</p>
    </div>

    <div className={styles.todoPosition}>
    <p className={`${pacifico.className} antialiased`} style={{fontSize:'40px'}}>Completed</p>
    </div>
    </div>

   </main>
  );
}
