import { Container, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import data from "./db.json";
import { useEffect, useState } from 'react';
import { useMediaQuery } from './component/MediaQueryHook';


function App() {
  const [filteredItems, setFilteredItems] = useState(data);
  const [searchValue, setSearchValue] = useState("")
  const isTablet = useMediaQuery("(max-width: 991px)");
  const isMobile = useMediaQuery("(max-width: 425px)");

  // for city
  const [checkedCity1, setCheckedCity1] = useState(false);
  const [checkedCity2, setCheckedCity2] = useState(false);
  const [checkedCity3, setCheckedCity3] = useState(false);

  // for category
  const [checkedCat1, setCheckedCat1] = useState(false);
  const [checkedCat2, setCheckedCat2] = useState(false);

  // for type
  const [checkedType1, setCheckedType1] = useState(false);
  const [checkedType2, setCheckedType2] = useState(false);
  const [checkedType3, setCheckedType3] = useState(false);

  // for active
  const [checkedActive1, setCheckedActive1] = useState(false);
  const [checkedActive2, setCheckedActive2] = useState(false);


  // for city
  const handleFilter1Change = () => {
    setCheckedCity1(!checkedCity1);
  };

  const handleFilter2Change = () => {
    setCheckedCity2(!checkedCity2);
  };
  const handleFilter3Change = () => {
    setCheckedCity3(!checkedCity3);
  };


  // for category
  const handleFilterCat1Change = () => {
    setCheckedCat1(!checkedCat1);
  };

  const handleFilterCat2Change = () => {
    setCheckedCat2(!checkedCat2);
  };

  // for type
  const handleFilterType1Change = () => {
    setCheckedType1(!checkedType1);
  };

  const handleFilterType2Change = () => {
    setCheckedType2(!checkedType2);
  };
  const handleFilterType3Change = () => {
    setCheckedType3(!checkedType3);
  };

  // for active 
  const handleFilterActive1Change = () => {
    setCheckedActive1(!checkedActive1);
  };

  const handleFilterActive2Change = () => {
    setCheckedActive2(!checkedActive2);
  };


  // for search by name

  const handleFilterChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    const filteredResult = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

    setFilteredItems(filteredResult);
  }

  // apply filter
  const applyFilters = () => {
    let filteredResult = data;
    let cityFilterActive = false;
    let categoryActive = false;

    if (checkedCity1) {
      filteredResult = filteredResult.filter(item => item.city === "dallas");
      cityFilterActive = true;
    }

    if (checkedCity2) {
      if (cityFilterActive) {
        filteredResult = filteredResult.concat(data.filter(item => item.city === "san francisco"));
      } else {
        filteredResult = filteredResult.filter(item => item.city === "san francisco");
      }
      cityFilterActive = true;
    }

    if (checkedCity3) {
      if (cityFilterActive) {
        filteredResult = filteredResult.concat(data.filter(item => item.city === "denver"));
      } else {
        filteredResult = filteredResult.filter(item => item.city === "denver");
      }
      cityFilterActive = true;
    }


    if (checkedCat1) {
      filteredResult = filteredResult.filter(item => item.category === "one");
      categoryActive = true;
    }
    if (checkedCat2) {

      if (categoryActive) {
        filteredResult = filteredResult.concat(data.filter(item => item.category === "two"));
      } else {
        filteredResult = filteredResult.filter(item => item.category === "two");
      }
      categoryActive = true;
      // filteredResult = filteredResult.filter(item => item.category === "two");
    }
    if (checkedType1) {
      filteredResult = filteredResult.filter(item => item.type === "A");
    }
    if (checkedType2) {
      filteredResult = filteredResult.filter(item => item.type === "B");
    }
    if (checkedType3) {
      filteredResult = filteredResult.filter(item => item.type === "C");
    }

    if (checkedActive1) {
      filteredResult = filteredResult.filter(item => item.active === "FALSE");
    }
    if (checkedActive2) {
      filteredResult = filteredResult.filter(item => item.active === "TRUE");
    }
    if (searchValue) {
      filteredResult = filteredResult.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    setFilteredItems(filteredResult);
  };

  useEffect(() => {
    applyFilters()
  }, [checkedCity1, checkedCity2, checkedCity3, checkedCat1, checkedCat2, checkedType1, checkedType2, checkedType3, checkedActive1, checkedActive2, searchValue])


  return (
    <div>

      <Container maxWidth="lg">
        <Grid container style={{ marginTop: "20px" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: isTablet ? "20px" : isMobile ? "18px" : "24px", fontWeight: "bold" }}>City</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Switch
                    checked={checkedCity1}
                    onChange={handleFilter1Change} /><p style={{ marginTop: "6px" }}>dallas</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedCity2} onChange={handleFilter2Change} /><p style={{ marginTop: "6px" }}>san francisco	</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedCity3} onChange={handleFilter3Change} /><p style={{ marginTop: "6px" }}>denver</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4} >
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: isTablet ? "20px" : isMobile ? "18px" : "24px", fontWeight: "bold" }}>Category</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedCat1} onChange={handleFilterCat1Change} /><p style={{ marginTop: "6px" }}>one</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedCat2} onChange={handleFilterCat2Change} /><p style={{ marginTop: "6px" }}>two</p>
                </div>

              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: isTablet ? "20px" : isMobile ? "18px" : "24px", fontWeight: "bold" }}>Type</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedType1} onChange={handleFilterType1Change} /><p style={{ marginTop: "6px" }}>A</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedType2} onChange={handleFilterType2Change} /><p style={{ marginTop: "6px" }}>B	</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedType3} onChange={handleFilterType3Change} /><p style={{ marginTop: "6px" }}>C</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: isTablet ? "20px" : isMobile ? "18px" : "24px", fontWeight: "bold" }}>Active</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedActive1} onChange={handleFilterActive1Change} /><p style={{ marginTop: "6px" }}>FALSE</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Switch checked={checkedActive2} onChange={handleFilterActive2Change} /><p style={{ marginTop: "6px" }}>TRUE</p>
                </div>

              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <TextField value={searchValue} onChange={(e) => handleFilterChange(e)
            } id="standard-basic" label="Name" variant="standard" />
          </Grid>
        </Grid>
        <TableContainer component={Paper} style={{ marginTop: "50px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.active}</TableCell>

                </TableRow>
              ))}
              {
                filteredItems.length === 0 &&
                <TableRow>
                  <TableCell sx={{ padding: "18px" }} colSpan={5} align="center">
                    No Data available
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

    </div>
  );
}

export default App;
