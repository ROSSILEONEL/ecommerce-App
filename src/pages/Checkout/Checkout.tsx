import { Table } from "../../components/ui/Table/Table"
import styles from './Checkout.module.css'
import { CardCredit } from "../../components/ui/CardCredit/CardCredit"
import { Toaster } from "sonner"
export const Checkout = () => {
  return (
    <div className={styles.container}>
      <Toaster position="bottom-right" richColors visibleToasts={1} />
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>

      <div className={styles.tableContainer} >
      <Table  />
      </div>
<div>
  <CardCredit/>
  {/* form target */}
</div>
      </div>
      {/* <button className={styles.buyButton}>Buy Now</button> */}
    </div>
  )
}
