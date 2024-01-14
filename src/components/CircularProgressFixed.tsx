import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', bgcolor: '#898989', borderRadius: '50%', width: '55px', height: '55px' }} >
      <CircularProgress variant="determinate" {...props} size={55}
        thickness={3} sx={{
          color: '#32FF9D', }}/>
      <Box
        sx={{
          top: 3,
          left: 2.6,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#141516',
          borderRadius: '50%',
          height: '90%',
          width: '90%'
        }}
      >
        <LocalShippingRoundedIcon sx={{
          color: '#32FF9D',
          fontSize: 32
        }} />
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {

  return <CircularProgressWithLabel value={100} />;
}
