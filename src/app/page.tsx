"use server";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.center}>
      <h1>Welcome to KBC</h1>
      <table className={styles.scoreTable}>
        <tbody className={styles.scoreTableBody}>
          <tr>
            <th>NO.</th>
            <th>Name</th>
            <th>score</th>
          </tr>
          <tr>
            <td>1</td>
            <td>abc</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>abc</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>abc</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>abc</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
