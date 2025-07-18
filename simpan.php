<?php
include 'koneksi.php';

$nik      = $_POST['nik'];
$nama     = $_POST['nama'];
$jk       = $_POST['jk'];
$tempat   = $_POST['tempat'];
$tgl      = $_POST['tgl'];
$agama    = $_POST['agama'];
$status   = $_POST['status'];
$pekerjaan= $_POST['pekerjaan'];
$kwn      = $_POST['kwn'];
$goldar   = $_POST['goldar'];
$hidup    = $_POST['hidup'];

$sql = "INSERT INTO penduduk VALUES ('$nik', '$nama', '$jk', '$tempat', '$tgl', '$agama', '$status', '$pekerjaan', '$kwn', '$goldar', '$hidup')";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil disimpan!";
} else {
    echo "Gagal menyimpan data: " . $conn->error;
}

$conn->close();
?>
