<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div :style="{ position: divPosition }">
          <table class="table table-borderless table-sm animated fadeIn mb-0">
            <thead>
              <tr>
                <th for="for row number"></th>
                <th for="row" class="row-table-header"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="lot-div" style="background: #ccc;height: 5px; display: flex; position: relative; width: 100%">
                    <div
                      class="lot-div"
                      ref="sliderLine"
                      v-for="(rowLots, idx) in rowData"
                      :style="{background: rowLots.lotColorCode ,width:`${rowLots.Lot_length}%`, marginLeft:`${rowLots.Width_From}%`}" style="height: 5px; position:absolute"
                      :key="idx"
                    >
                      <h6
                        v-show="rowLots.showHeader"
                        class="row-data"
                        :id="`rowDiv-${idx}-${rowLots.Production_location_Id}-${rowLots.Lot_Id}-${idx}`"
                      >
                        <span
                          v-show="
                            rowLots.Lot_Id !== null &&
                            !rowLots.Multiple_Lot_Id &&
                            rowLots[column.name]
                          "
                          v-for="column in rowLotHeading"
                          :class="column.class"
                          :key="column.name"
                          >{{ column.title }}{{ rowLots[column.name] }}</span
                        >
                      </h6>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRows",
  props: {
    rowData: Array,
    rowLotHeading: {
      type: Array,
      default () {
        return [{
          name: 'Lot_number',
          title: ''
        }];
      }
    },
  },
  created() {},
  data() {
    return {
      rowDimensions: {
        height: null,
        left: null,
        right: null,
        top: null,
        width: null
      },
      divPosition: "relative",
    };
  },
  mounted() {
    console.log(this.$refs.sliderLine[0].getBoundingClientRect())
    this.rowDimensions = this.$refs.sliderLine[0].getBoundingClientRect();
  },
  methods: {
    rowStyle(rowLots) {
      let totalWidth = Math.round(
        (this.rowDimensions.right *
          (rowLots.Width_To - rowLots.Width_From)) /
          this.rowData.Row_length
      );
      let leftAlign = Math.round(
        (this.rowDimensions.left * rowLots.Width_From) /
          this.rowData.Row_length
      );
      return (
        `position:absolute;pointer-events:auto;left:${leftAlign}px;width:${totalWidth}px;background:${rowLots.lotColorCode};` +
        rowLots.additionalStyle
      );
    },
  },
};
</script>

<style scoped>
.table tr td {
  white-space: normal;
  color: #004085;
  border-color: #9fceff;
}

.parent-slider-div {
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  height: 5px;
}

.parent-slider-div:hover {
  cursor: pointer;
}

.rowDataOnHover {
  position: relative;
  width: 20px;
  z-index: 1;
  height: 5px;
}

.lot-div {
  height: 5px;
}

.row-data {
  position: relative;
  bottom: 16px;
  color: black;
  width: fit-content;
  font-size: 12px;
}


.bold-text {
  font-weight: 700;
  font-size: small;
}
</style>,
