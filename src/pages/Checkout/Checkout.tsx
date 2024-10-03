import { Table } from "../../components/ui/Table/Table"
import styles from './Checkout.module.css'

export const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>

      <div className={styles.tableContainer} >
      <Table  />
      </div>
<div>
  {/* form target */}
</div>
      </div>
      <button className={styles.buyButton}>Buy Now</button>
    </div>
  )
}
